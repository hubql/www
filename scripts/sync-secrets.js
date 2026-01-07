#!/usr/bin/env node

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const ENV_FILE = path.join(__dirname, '..', '.env')

function parseEnvFile(filePath) {
    if (!fs.existsSync(filePath)) {
        console.error(`Error: ${filePath} not found`)
        process.exit(1)
    }

    const content = fs.readFileSync(filePath, 'utf-8')
    const lines = content.split('\n')
    const secrets = {}

    lines.forEach((line, index) => {
        // Skip empty lines and comments
        const trimmedLine = line.trim()
        if (!trimmedLine || trimmedLine.startsWith('#')) {
            return
        }

        // Parse KEY=VALUE
        const match = trimmedLine.match(/^([A-Z_][A-Z0-9_]*)\s*=\s*(.*)$/)
        if (match) {
            const key = match[1]
            let value = match[2]

            // Remove quotes if present
            if (
                (value.startsWith('"') && value.endsWith('"')) ||
                (value.startsWith("'") && value.endsWith("'"))
            ) {
                value = value.slice(1, -1)
            }

            secrets[key] = value
        } else if (trimmedLine.includes('=')) {
            console.warn(
                `Warning: Line ${index + 1} has invalid format: ${line}`
            )
        }
    })

    return secrets
}

function syncSecrets(secrets) {
    const secretKeys = Object.keys(secrets)

    if (secretKeys.length === 0) {
        console.log('No secrets found in .env file')
        return
    }

    console.log(`Found ${secretKeys.length} secrets to sync:\n`)

    secretKeys.forEach((key) => {
        console.log(`Setting secret: ${key}`)
        try {
            // Use echo to pipe the secret value to wrangler
            execSync(`echo "${secrets[key]}" | wrangler secret put ${key}`, {
                stdio: ['pipe', 'inherit', 'inherit'],
                shell: true,
            })
            console.log(`✓ ${key} synced successfully\n`)
        } catch (error) {
            console.error(`✗ Failed to sync ${key}\n`)
            // Continue with other secrets even if one fails
        }
    })

    console.log('Sync complete!')
}

// Main execution
console.log('Syncing .env secrets to Cloudflare Worker...\n')
const secrets = parseEnvFile(ENV_FILE)
syncSecrets(secrets)

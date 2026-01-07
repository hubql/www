#!/usr/bin/env node

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const ENV_FILE = path.join(__dirname, '..', '.env')

// Runtime secrets - set via wrangler secret (encrypted, only available at runtime)
const RUNTIME_SECRETS = ['TURNSTILE_SECRET', 'NOTION_DB_ID', 'NOTION_SECRET']

// Build-time variables - must be set manually in Cloudflare Dashboard
// Settings > Environment Variables > Build environment variables
const BUILD_ENV_VARS = [
    'TINA_TOKEN',
    'NEXT_PUBLIC_TURNSTILE_SITE_KEY',
    'NEXT_PUBLIC_GTM_ID',
    'NEXT_PUBLIC_TERMLY_ID',
    'NEXT_PUBLIC_KOALA_KEY',
    'NEXT_PUBLIC_POSTHOG_KEY',
    'NEXT_PUBLIC_POSTHOG_HOST',
]

function parseEnvFile(filePath) {
    if (!fs.existsSync(filePath)) {
        console.error(`Error: ${filePath} not found`)
        process.exit(1)
    }

    const content = fs.readFileSync(filePath, 'utf-8')
    const lines = content.split('\n')
    const vars = {}

    lines.forEach((line, index) => {
        const trimmedLine = line.trim()
        if (!trimmedLine || trimmedLine.startsWith('#')) {
            return
        }

        const match = trimmedLine.match(/^([A-Z_][A-Z0-9_]*)\s*=\s*(.*)$/)
        if (match) {
            const key = match[1]
            let value = match[2]

            if (
                (value.startsWith('"') && value.endsWith('"')) ||
                (value.startsWith("'") && value.endsWith("'"))
            ) {
                value = value.slice(1, -1)
            }

            vars[key] = value
        } else if (trimmedLine.includes('=')) {
            console.warn(
                `Warning: Line ${index + 1} has invalid format: ${line}`
            )
        }
    })

    return vars
}

function syncRuntimeSecrets(vars) {
    const secretsToSync = RUNTIME_SECRETS.filter((key) => vars[key])

    if (secretsToSync.length === 0) {
        console.log('No runtime secrets found to sync\n')
        return
    }

    console.log(`Found ${secretsToSync.length} runtime secrets to sync:\n`)

    secretsToSync.forEach((key) => {
        console.log(`Setting secret: ${key}`)
        try {
            execSync(`echo "${vars[key]}" | wrangler secret put ${key}`, {
                stdio: ['pipe', 'inherit', 'inherit'],
                shell: true,
            })
            console.log(`✓ ${key} synced successfully\n`)
        } catch (error) {
            console.error(`✗ Failed to sync ${key}\n`)
        }
    })
}

function checkBuildVars(vars) {
    console.log('\n=========================================')
    console.log('Build Environment Variables Status')
    console.log('=========================================\n')

    console.log('These must be set in Cloudflare Dashboard:')
    console.log(
        'Settings > Environment Variables > Build environment variables\n'
    )

    BUILD_ENV_VARS.forEach((key) => {
        const hasValue = vars[key] && vars[key].length > 0
        const status = hasValue ? '✓' : '✗'
        const display = hasValue ? '(value found in .env)' : '(MISSING in .env)'
        console.log(`${status} ${key} ${display}`)
    })

    console.log(
        '\nNote: Copy these values from your .env file to Cloudflare Dashboard'
    )
}

// Main execution
console.log('=================================================')
console.log('Cloudflare Worker Environment Setup')
console.log('=================================================\n')

const vars = parseEnvFile(ENV_FILE)

// Sync runtime secrets
syncRuntimeSecrets(vars)

// Check build variables
checkBuildVars(vars)

console.log('\n=================================================')
console.log('Summary')
console.log('=================================================')
console.log('\n✓ Runtime secrets: Synced via wrangler secret')
console.log('  (Encrypted, only available in API routes at runtime)')
console.log('\n⚠ Build environment variables: Manual setup required')
console.log('  (Must be set in Cloudflare Dashboard for CI/CD builds)')
console.log(
    '  Dashboard path: Settings > Environment Variables > Build environment variables\n'
)

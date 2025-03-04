import { motion } from 'framer-motion'

export const EnvVariable = () => {
    return (
        <div className="w-10/12 flex flex-col">
            <p className="uppercase tracking-[4px] text-xs text-neutral-400">
                Local
            </p>
            <table className="w-full table-auto text-base border border-neutral-700 ">
                <thead className="border-b border-neutral-700">
                    <tr className="divide-x divide-solid divide-neutral-700 text-neutral-400">
                        <th className="px-3 py-2">Key</th>
                        <th className="px-3 py-2">Value</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-solid divide-neutral-700">
                    <tr className="divide-x divide-solid divide-neutral-700">
                        <td className="relative px-3 py-2 ">
                            <div className="flex items-center">USER_ID</div>
                        </td>
                        <td className=" relative px-3 py-2">
                            <div className="flex items-center">
                                ·················
                            </div>
                        </td>
                    </tr>
                    <tr className="divide-x divide-solid divide-neutral-700">
                        <td className="relative px-3 py-2">
                            <div className="flex items-center">API_TOKEN</div>
                        </td>
                        <td className=" relative px-3 py-2">
                            <div className="flex items-center">
                                ·····························
                            </div>
                        </td>
                    </tr>
                    <tr className="divide-x divide-solid divide-neutral-700 text-neutral-500">
                        <td className="px-3 py-2">Add Key</td>
                        <td className="px-3 py-2">Add Value</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

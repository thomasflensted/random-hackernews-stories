'use client'

import { motion } from "framer-motion"

const PercentageBar = ({ width }: { width: string }) => {
    return (
        <div className="h-2 w-full border rounded-full">
            <motion.div
                initial={{ width: 0 }}
                animate={{ width }}
                transition={{ duration: 1, ease: "circInOut" }}
                className='h-full bg-blue-500 rounded-full'>
            </motion.div>
        </div>
    )
}
export default PercentageBar
'use client'

import Link from "next/link"
import { notFound, useSearchParams } from "next/navigation"


const SortRow = () => {

    const sp = useSearchParams();

    let sort = sp.has('sort') ? sp.get('sort') : 'date';
    if (!sort || !['date', 'score'].includes(sort)) notFound();

    return (
        <div className="flex text-xs items-center gap-2">
            <h3>Sort By:</h3>
            <Link href='?sort=date' shallow={true} replace={false}
                className={`border rounded px-2 py-0.5 ${sort === 'date' ? 'border-black' : ''}`}>
                Date
            </Link>
            <Link href='?sort=score' shallow={true} replace={false}
                className={`border rounded px-2 py-0.5 ${sort === 'score' ? 'border-black' : ''}`}>
                Score
            </Link>
        </div >
    )
}
export default SortRow
import { Card } from '@/components/card'
import Link from 'next/link'
import React from 'react'

const Archived = () => {
    return (
        <Card>
            <div>
                Archived
                <Link href={'/dashboard/'}>Default</Link>
            </div>
        </Card>
    )
}

export default Archived
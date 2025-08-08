import React from 'react'
import { Card } from '@/components/card'
import Link from 'next/link'

const Notification = () => {
  return (
    <Card>
      <div>Notifications page</div>
      <div>
        <Link href={'/dashboard/archived'}>Archived</Link>
      </div>
    </Card>
  )
}

export default Notification
import { sidebarMenuButtonVariants } from '@/components/ui/sidebar'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

const SavedQueryButtonSkeleton = () => {
  return (
    <div className='flex flex-col gap-2'>
        {
            [1,2,3,4,5].map((id)=>(
                <Skeleton key={id} className={cn(sidebarMenuButtonVariants({ variant:'default', size:'default'}),"h-10")}/>
            ))
        }
    </div>
  )
}

export default SavedQueryButtonSkeleton
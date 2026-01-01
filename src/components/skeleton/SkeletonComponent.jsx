import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function SkeletonComponent({count}) {
    return (
        <div
            style={{
                marginTop: '2rem',
            }}
        >
            <SkeletonTheme baseColor="#202020" highlightColor="#E4112F">
                <p>
                    <Skeleton count={count} />
                </p>
            </SkeletonTheme>
        </div>
    )
}

export default SkeletonComponent

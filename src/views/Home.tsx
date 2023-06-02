import React, { useEffect, useState } from 'react'
import { getSongListType, getTopPlaylist } from '@/service'
import type { ISongListTypeResponse } from '@/service'
import { useRequest } from 'ahooks'

// 类型断层
export default function Home() {
  // const [songListType, setSongListType] = useState<ISongListTypeResponse>([]);
  const [songListType, setSongListType] = useState<
    Awaited<ReturnType<typeof getSongListType>>['data']['sub']
  >([])
  console.log(songListType)
  useEffect(() => {
    getSongListType()
      .then((res) => {
        setSongListType(res.data.sub)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  const { data: topPlaylist } = useRequest(() => getTopPlaylist({ cat: '全部' }))
  return <div>home</div>
}

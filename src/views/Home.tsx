import React from 'react'
// import { getSongListType } from '@/service'

// 类型断层
export default function Home() {
  // const [songListType, setSongListType] = useState<ISongListTypeResponse>([]);
  // const [songListType, setSongListType] = useState<
  //   Awaited<ReturnType<typeof getSongListType>>['data']['sub']>([])
  // console.log(songListType)
  // useEffect(() => {
  //   getSongListType()
  //     .then((res) => {
  //       setSongListType(res.data.sub)
  //     })
  // }, [])
  // const { data: topPlaylist } = useRequest(() => getTopPlaylist({ cat: '全部' }))
  return <div>home</div>
}

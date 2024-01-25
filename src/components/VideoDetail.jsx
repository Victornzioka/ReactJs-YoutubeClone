import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { Typography, Box, Stack } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import { Video } from './'
import { fetchFromApi } from "../utils/fetchFromApi"


const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  console.log(videoDetail)
  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

  }, [id]);

  // const {snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount}} = videoDetail

  return (
  <Box minHeight="95vh">
    <Stack direction={{ xs: 'column', md: 'row' }}>
      <Box flex={1}>
        <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} 
            className='react-player' controls />
          
          <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
            {/* {videoDetail.snippet.title} */}
          </Typography>
        </Box>
      </Box>
    </Stack>
  </Box>
  )
}

export default VideoDetail

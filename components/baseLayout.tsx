import { Box } from '@chakra-ui/layout'
import SideBar from './sideBar'
import PlayerBar from './playerBar'

const BaseLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" left="0" width="230px">
        <SideBar />
      </Box>
      <Box marginLeft="230px" marginBottom="80px">
        <Box height="calc(100vh - 80px)">{children}</Box>
      </Box>
      <Box positon="absolute" bottom="0" left="0">
        <PlayerBar />
      </Box>
    </Box>
  )
}

export default BaseLayout

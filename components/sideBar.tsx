import NextImage from 'next/image'
import NextLink from 'next/link'
import {
  Box,
  List,
  ListItem,
  ListIcon,
  LinkBox,
  LinkOverlay,
  Divider,
} from '@chakra-ui/layout'

import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from 'react-icons/md'

const navMenu = [
  {
    name: 'Home',
    icon: MdHome,
    route: '/',
  },
  {
    name: 'Search',
    icon: MdSearch,
    route: '/search',
  },
  {
    name: 'Your Library',
    icon: MdLibraryMusic,
    route: '/library',
  },
]

const musicMenu = [
  {
    name: 'Create Playlist',
    icon: MdPlaylistAdd,
    route: '/',
  },
  {
    name: 'Liked Songs',
    icon: MdFavorite,
    route: 'favorites',
  },
]

const SideBar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 80px)"
      bg="black"
      color="gray"
      paddingX="5px"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="10px" paddingX="20px">
          <NextImage src="/logo.svg" height={60} width={120} />
        </Box>
        <Box paddingX="20px" marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((menu) => (
              <ListItem
                paddingX="20px"
                fontSize="14px"
                key={menu.name}
                color="gray.300"
              >
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        marginRight="20px"
                        color="white"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box paddingX="20px">
          <List spacing={2}>
            {musicMenu.map((menu) => (
              <ListItem
                paddingX="20px"
                fontSize="14px"
                key={menu.name}
                color="gray.300"
              >
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon as={menu.icon} marginRight="20px" />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box paddingX="15px">
          <Divider marginTop="10px" color="gray.900" />
        </Box>
        <Box height="60%" overflowY="auto" marginY="10px">
          {Array(50)
            .fill(1)
            .map((_, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <h1 key={i}>Hey</h1>
            ))}
        </Box>
      </Box>
    </Box>
  )
}

export default SideBar

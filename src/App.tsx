import { VStack } from '@chakra-ui/react'
import { AccountList } from './components/AccountList'

export const App = () => {
  return (
    <VStack backgroundColor={'#353634'} minHeight={'100vh'} justifyContent={'center'} alignItems={'center'}>
      <AccountList />
    </VStack>
  )
}

import { globalStyles } from '@/styles/global-styles'
import { Text, TextProps } from 'react-native'

interface Props extends TextProps {
    variant: 'main' | 'sub'
}

const ThemeText = ({ children, variant='main', ...rest} : Props) => {
  return (
      <Text
        style={[
            { color: 'white', fontFamily: 'SpaceMono' },
            variant === 'main' && globalStyles.mainResult,
            variant === 'sub' && globalStyles.subResult
        ]}
        numberOfLines={1}
        adjustsFontSizeToFit
        { ...rest}
      >
        {children}
      </Text>
  )
}

export default ThemeText
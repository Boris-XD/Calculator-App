import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global-styles';
import { Text, Pressable } from 'react-native'
import * as Haptics from 'expo-haptics';

interface Props {
    label: string;
    color?: string;
    blackText?: boolean;
    doubleSize?: boolean;
    onPress : () => void;
}

const CalculatorButton = ({ label, color = Colors.darkGray, blackText = false, doubleSize=false, onPress }: Props) => {
  return (
    <Pressable
        style={({pressed}) => ({
            ...globalStyles.button,
            backgroundColor: color,
            opacity: pressed ? 0.8 : 1,
            width: doubleSize ? globalStyles.button.width*2 + 20 : globalStyles.button.width
        })}
        
        onPress={() => {
            //Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            onPress();
        }}
    >
        <Text
            style={{
                ...globalStyles.buttonText,
                color: blackText ? 'black' : 'white'
            }}
        >
            {label}
        </Text>
    </Pressable>
  )
}

export default CalculatorButton
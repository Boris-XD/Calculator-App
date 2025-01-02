import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'
import CalculatorButton from '@/components/CalculatorButton'
import { Colors } from '@/constants/Colors'
import { useCalculator } from '@/hooks/useCalculator'

const CalculatorApp = () => {
  const { buildNumber, number, formula } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
        {/* Resultados */}
        <View style={{paddingHorizontal: 30, marginBottom: 20}}>
            <ThemeText variant='main'>{formula}</ThemeText>
            <ThemeText variant='sub'>7630</ThemeText>
        </View>
        {/* Botones */}
        <View style={globalStyles.row}>
            <CalculatorButton
                label='C'
                onPress={() => console.log('C')}
            />
            <CalculatorButton
                label='+/-'
                onPress={() => console.log('C')}
            />
            <CalculatorButton
                label='del'
                onPress={() => console.log('C')}
            />
            <CalculatorButton
                label='¬'
                color={Colors.orange}
                onPress={() => console.log('C')}
            />
        </View>
        <View style={globalStyles.row}>
            <CalculatorButton
                label='7'
                onPress={() => buildNumber('7')}
            />
            <CalculatorButton
                label='8'
                onPress={() => buildNumber('8')}
            />
            <CalculatorButton
                label='9'
                onPress={() => buildNumber('9')}
            />
            <CalculatorButton
                label='X'
                color={Colors.orange}
                onPress={() => console.log('C')}
            />
        </View>
        <View style={globalStyles.row}>
            <CalculatorButton
                label='4'
                onPress={() => buildNumber('4')}
            />
            <CalculatorButton
                label='5'
                onPress={() => buildNumber('5')}
            />
            <CalculatorButton
                label='6'
                onPress={() => buildNumber('6')}
            />
            <CalculatorButton
                label='-'
                color={Colors.orange}
                onPress={() => console.log('C')}
            />
        </View>
        <View style={globalStyles.row}>
            <CalculatorButton
                label='1'
                onPress={() => buildNumber('1')}
            />
            <CalculatorButton
                label='2'
                onPress={() => buildNumber('2')}
            />
            <CalculatorButton
                label='3'
                onPress={() => buildNumber('3')}
            />
            <CalculatorButton
                label='+'
                color={Colors.orange}
                onPress={() => console.log('C')}
            />
        </View>
        <View style={globalStyles.row}>
            <CalculatorButton
                label='0'
                doubleSize={true}
                onPress={() => buildNumber('0')}
            />
            <CalculatorButton
                label='.'
                onPress={() => buildNumber('.')}
            />
            <CalculatorButton
                label='='
                color={Colors.orange}
                onPress={() => console.log('C')}
            />
        </View>
    </View>
  )
}

export default CalculatorApp
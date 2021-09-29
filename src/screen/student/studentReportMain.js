import React from 'react';
import { Flex, IconButton, Text, View, Button, HStack, Box, CloseIcon, HamburgerIcon } from 'native-base';

const studentReportMain = ({ history }) => {
  return (
    <Flex style={ROOT} preset="scroll">
      <>
        <Box safeAreaTop backgroundColor="transparent" />

        <HStack bg="transparent" justifyContent="space-between" alignItems="center">
          <HStack space={3}>
            <IconButton icon={<HamburgerIcon size="4" color="#000000" />}></IconButton>
          </HStack>
          <HStack space={1} alignItems="center">
            <Text
              style={{
                fontSize: 24,
                fontWeight: '600',
                fontStyle: 'normal',
                lineHeight: 30,
                letterSpacing: 0,
                textAlign: 'center',
                color: '#000000',
              }}
            >
              리포트
            </Text>
          </HStack>

          <HStack space={3}>
            <IconButton
              onPress={() => history.push('/studentMain')}
              icon={<CloseIcon size="4" name="close" color="#000000" />}
            ></IconButton>
          </HStack>

          {/* <IconButton onPress={onRightPress} icon={<MaterialIcons name="close" color="black" />} /> */}
        </HStack>
      </>

      <View style={mainBottomButtonsViewStyle}>
        <Button
          style={button}
          onPress={() => {
            history.push('/');
          }}
        >
          <Text style={textInformationUseButton}>응시내역 리포트</Text>
        </Button>
        <Button
          style={button}
          onPress={() => {
            history.push('/studentReportCumulative');
          }}
        >
          <Text style={textInformationUseButton}>누적리포트</Text>
        </Button>
        <Button
          style={button}
          onPress={() => {
            history.push('/');
          }}
        >
          <Text style={textInformationUseButton}>수업자료</Text>
        </Button>
      </View>
    </Flex>
  );
};

const ROOT = {
  marginTop: 20,
  flex: 1,
  height: '100vh',
};

const case1 = {
  flex: 1,

  marginTop: 20,
  marginRight: 20,
  marginLeft: 20,
};

const mainBottomButtonsViewStyle = {
  flex: 2,
};
const button = {
  marginLeft: 20,
  marginRight: 20,
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: '#b2b2b2',
  backgroundColor: '#ffffff',
  borderRadius: 5 * 2.5,
  height: 55, //-- 버튼 크기 지정중
  // height: 67,
  // width: '100%',
  marginBottom: 10,
  marginTop: 10,
  // marginTop: '1.6%',
};

//하단 이용안내 버튼 텍스트
const textInformationUseButton = {
  fontSize: 8.3 * 2.5,
  fontWeight: 'normal',
  fontStyle: 'normal',
  lineHeight: 11 * 2.5,
  letterSpacing: 0,
  textAlign: 'center',
  color: '#747474',
};
const infoText = {
  fontFamily: 'roboto',
  fontSize: 22,
  fontWeight: 'normal',
  fontStyle: 'normal',
  lineHeight: 36,
  letterSpacing: 0,
  textAlign: 'center',
  color: '#000000',
};
const cardImage = {
  marginLeft: 80,
  marginRight: 80,
  marginBottom: 80,
  marginTop: 80,
  flex: 1,
  height: 228,
  backgroundColor: 'white',
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: '#707070',
};
export default studentReportMain;

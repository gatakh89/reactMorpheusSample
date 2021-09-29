import React, { useEffect } from 'react';

import { Flex, IconButton, Text, View, Button, HStack, Box, CloseIcon, HamburgerIcon } from 'native-base';

const teacherMain = ({ history }) => {
  useEffect(() => {}, []);

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
            ></Text>
          </HStack>

          <HStack space={3}>
            <IconButton
              onPress={() => history.push('/')}
              icon={<CloseIcon size="4" name="close" color="#000000" />}
            ></IconButton>
          </HStack>

          {/* <IconButton onPress={onRightPress} icon={<MaterialIcons name="close" color="black" />} /> */}
        </HStack>
      </>

      <View style={case1}>
        <Text style={infoText}>
          {M.data.storage().companyNm} {M.data.storage().memberNm} 선생님, 안녕하세요.
        </Text>

        {/* <Card style={cardImage}>
        <CardItem cardBody></CardItem>
      </Card> */}
      </View>

      <View style={mainBottomButtonsViewStyle}>
        <Button
          style={button}
          onPress={() => {
            M.data.storage().memberType === 'memb_type01' ? null : null;
          }}
        >
          <Text style={textInformationUseButton}>실시간강의</Text>
        </Button>
        <Button
          style={button}
          onPress={() => {
            history.push('/loginInfo');
          }}
        >
          <Text style={textInformationUseButton}>리포트</Text>
        </Button>
      </View>
    </Flex>
  );
};

// Style

const ROOT = {
  flex: 1,
  height: '100vh',
  marginTop: 20,
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
export default teacherMain;

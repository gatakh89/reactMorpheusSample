import React, { useState, useEffect } from 'react';
import { Flex, Box, Button, NativeBaseProvider, Text, Alert, VStack, HStack, IconButton, CloseIcon } from 'native-base';
const afterLogin = ({ history }) => {
  const [loginInfo, setLoginInfo] = useState({});
  useEffect(() => {
    M.data.storage();
    setLoginInfo(M.data.storage());
  }, []);
  const back = () => {
    M.data.removeStorage();
    history.push('/');
  }; //Style

  //전체 스크린
  const container = {
    height: '100vh',

    backgroundColor: 'transparent',
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
  //상단 뷰
  const view1 = {
    flex: 1,
  };
  const a = {
    width: 32,
    height: 31,
    marginLeft: 20,
  };
  //상단 타이틀
  const textTitle = {
    marginTop: '4.9%',
    //   fontFamily: typography.primary,
    fontSize: 10.7 * 2.5,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 14.3 * 2.5,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#000000',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  };

  //중단 뷰
  const view2 = {
    marginTop: 4,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    // height: 609,
    flex: 4,
    backgroundColor: '#e9e9e9',
    borderStyle: 'solid',
    borderWidth: 0.3 * 2.5,
    borderColor: '#707070',
  };

  //하단 뷰
  const view3 = {
    // height: 199.5,
    flex: 2,
  };

  //하단 로그인 버튼 텍스트
  const textLoginButton = {
    textDecorationLine: 'underline',
    //   fontFamily: typography.primary,
    fontSize: 8.3 * 2.5,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 11 * 2.5,
    // letterSpacing: 0,
    color: '#747474',
    marginTop: 30,
    // marginLeft: '35.5%',
    // width: 41.7 * 2.5,
    // height: 11 * 2.5,
  };

  // console.log('>>> start', new Date().getTime() - timestemp);
  // timestemp = new Date().getTime();
  // console.log('>>> finish', new Date().getTime() - timestemp);
  return (
    <NativeBaseProvider>
      <Flex style={container} preset="scroll">
        <Alert w="100%" status="info" colorScheme="info">
          <VStack space={2} flexShrink={1} w="100%">
            <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
              <HStack flexShrink={1} space={2} alignItems="center">
                <Alert.Icon />
                <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                  {JSON.stringify(loginInfo.memberNm)}
                </Text>
              </HStack>
              <IconButton onPress={back} variant="unstyled" icon={<CloseIcon size="3" color="coolGray.600" />} />
            </HStack>
            <Box
              pl="6"
              _text={{
                color: 'coolGray.600',
              }}
            >
              {JSON.stringify(loginInfo.classInfoList)}
            </Box>
          </VStack>
        </Alert>
      </Flex>
    </NativeBaseProvider>
  );
};
export default afterLogin;

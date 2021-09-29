import React, { useEffect } from 'react';
import { Flex, Box, Button, NativeBaseProvider, Text, View } from 'native-base';
const firstPage = ({ history }) => {
  useEffect(() => {
    if (M.data.storage().memberType === 'memb_type01') {
      history.push('/studentMain');
    } else if (M.data.storage().memberType === 'memb_type02') {
      history.push('/teacherMain');
    } else return;
  }, []);
  //Style
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
        <View style={view1}>
          <Text style={textTitle}>정답을 쓰다</Text>
        </View>
        <View style={view2}></View>
        <View style={view3}>
          <Button
            style={button}
            onPress={() => {
              history.push('/loginInfo');
            }}
          >
            <Text style={textInformationUseButton}>이용안내</Text>
          </Button>
          <Box alignItems="center">
            <Text
              style={textLoginButton}
              onPress={() => {
                history.push('/login');
              }}
            >
              로그인 하기
            </Text>
          </Box>
        </View>
      </Flex>
    </NativeBaseProvider>
  );
};
export default firstPage;

import React, { useState } from 'react';

import {
  Flex,
  Button,
  View,
  Box,
  Heading,
  Select,
  VStack,
  HStack,
  Pressable,
  Divider,
  IconButton,
  Text,
  CloseIcon,
  HamburgerIcon,
  ScrollView,
  Icon,
} from 'native-base';

const studentReportCumulative = ({ history }) => {
  const [state1, setState1] = useState('');
  const onValueChange1 = (state1) => {
    setState1(state1);
  };
  const [state2, setState2] = useState('');
  const onValueChange2 = (state2) => {
    setState2(state2);
  };
  const [state3, setState3] = useState('');
  const onValueChange3 = (state3) => {
    setState3(state3);
  };
  const [state4, setState4] = useState('');
  const onValueChange4 = (state4) => {
    setState4(state4);
  };

  async function fetchData() {
    try {
      cumulativeReportStore.getStudentCumulativeReports(
        userStore.user.memberNo,
        userStore.firestClassInfo.classId,
        state1,
        state2,
        state3,
        state4
      );
    } catch (error) {}
  }

  async function searchData() {
    try {
      await cumulativeReportStore.getStudentCumulativeReports(
        userStore.user.memberNo,
        userStore.firestClassInfo.classId,
        state1,
        state2,
        state3,
        state4
      );
    } catch (error) {}

    setState1('');
    setState2('');
    setState3('');
    setState4('');
    setVisible(!visible);
  }

  const AlertSearch2 = () => {
    return (
      <Box mt={2} safeAreaTop backgroundColor="transparent">
        <HStack>
          <VStack style={{ width: '22%', marginLeft: 10 }}>
            <Select
              dropdownOpenIcon={<Icon name="expand-less" color="#000000" />}
              style={{ width: undefined }}
              selectedValue={state1}
              // onValueChange={(searchString) => cumulativeReportStore.setSearchString(searchString)}
              onValueChange={(state1) => onValueChange1(state1)}
            >
              <Select.Item label="시험구분1" value="" />
              <Select.Item label="진단고사" value="10" />
              <Select.Item label="내신대비" value="20" />
              <Select.Item label="모의고사" value="30" />
              <Select.Item label="출판교재" value="50" />
              <Select.Item label="기타평가" value="40" />
            </Select>
          </VStack>
          <VStack style={{ width: '22%', marginLeft: 10 }}>
            <Select
              dropdownOpenIcon={<Icon name="expand-less" color="#000000" />}
              style={{ width: undefined }}
              selectedValue={state2}
              onValueChange={(state2) => onValueChange2(state2)}
            >
              <Select.Item label="시험구분2" value="" />
              <Select.Item label="레벨테스트" value="1001" />
              <Select.Item label="1학기중간" value="2001" />
              <Select.Item label="1학기기말" value="2002" />
              <Select.Item label="2학기중간" value="2003" />
              <Select.Item label="2학기기말" value="2004" />
              <Select.Item label="자체모의고사" value="3001" />
              <Select.Item label="3월 모의고사" value="3002" />
              <Select.Item label="6월 모의고사" value="3003" />
              <Select.Item label="9월 모의고사" value="3004" />
              <Select.Item label="일일평가" value="4001" />
              <Select.Item label="주간평가" value="4002" />
              <Select.Item label="월말평가" value="4003" />
              <Select.Item label="단원평가" value="5001" />
            </Select>
          </VStack>

          <VStack style={{ width: '22%', marginLeft: 10 }}>
            <Select
              dropdownOpenIcon={<Icon name="expand-less" color="#000000" />}
              style={{ width: undefined }}
              selectedValue={state3}
              onValueChange={(state3) => onValueChange3(state3)}
            >
              <Select.Item label="학년" value="" />
              <Select.Item label="초등1" value="11" />
              <Select.Item label="초등2" value="12" />
              <Select.Item label="초등3" value="13" />
              <Select.Item label="초등4" value="14" />
              <Select.Item label="초등5" value="15" />
              <Select.Item label="초등6" value="16" />
              <Select.Item label="예비 중1" value="20" />
              <Select.Item label="중등1" value="21" />
              <Select.Item label="중등2" value="22" />
              <Select.Item label="중등3" value="23" />
              <Select.Item label="예비 고1" value="30" />
              <Select.Item label="고등1" value="31" />
              <Select.Item label="고등2" value="32" />
              <Select.Item label="고등3" value="33" />
              <Select.Item label="재수" value="41" />
              <Select.Item label="일반" value="42" />
            </Select>
          </VStack>
          <VStack style={{ width: '22%', marginLeft: 10 }}>
            <Select
              dropdownOpenIcon={<Icon name="expand-less" color="#000000" />}
              style={{ width: undefined }}
              selectedValue={state4}
              onValueChange={(state4) => onValueChange4(state4)}
            >
              <Select.Item label="과목" value="" />
              <Select.Item label="국어" value="K" />
              <Select.Item label="수학" value="M" />
              <Select.Item label="영어" value="E" />
              <Select.Item label="사회" value="S" />
              <Select.Item label="과학" value="C" />
            </Select>
          </VStack>
        </HStack>
        <HStack>
          <VStack style={{ width: '95%' }}>
            <Button style={searchButton2} variant="outline" colorScheme="gray">
              <Heading style={searchButtonText2} onPress={searchData}>
                검색
              </Heading>
            </Button>
          </VStack>
        </HStack>
      </Box>
    );
  };

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const buttonPress = (item) => {
    cumulativeReportStore.addTestIdModel2(item.testId);
  };
  const buttonPress1 = (item) => {
    cumulativeReportStore.delTestIdModel2(item.testId);
  };

  return (
    <Flex style={ROOT}>
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
              onPress={() => history.push('/studentReportMain')}
              icon={<CloseIcon size="4" name="close" color="#000000" />}
            ></IconButton>
          </HStack>

          {/* <IconButton onPress={onRightPress} icon={<MaterialIcons name="close" color="black" />} /> */}
        </HStack>
      </>
      <AlertSearch2></AlertSearch2>
      {/* <View style={case3}>
        <Button style={button} onPress={toggleOverlay}>
          <Text style={searchButtonText1}>검색</Text>
        </Button>

        <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
          <AlertSearch />
        </Overlay>
      </View> */}
      {/* <ScrollView style={bodyScrollViewStyle}>
        {StudentCumulativeReports &&
          StudentCumulativeReports.map((item, i) => (
            <VStack style={table} key={i}>
              <VStack>
                <HStack style={case2}>
                  <HStack style={rowMargin}>
                    <VStack style={case4}>
                      <Text style={titleText}>시험구분</Text>
                    </VStack>
                    <Heading style={mainText}> {item.testCateNm}</Heading>
                  </HStack>
                  <HStack style={rowMargin}>
                    <VStack style={case4}>
                      <Text style={titleText}>학년</Text>
                    </VStack>
                    <Heading style={mainText}> {item.gradeCodeNm}</Heading>
                  </HStack>
                  <HStack style={rowMargin}>
                    <VStack style={case4}>
                      <Text style={titleText}>과목</Text>
                    </VStack>
                    <Heading style={mainText}> {item.subjectCodeNm}</Heading>
                  </HStack>
                  <Pressable onPress={() => navigation.navigate('studentReportCumulativeResult', item.testId)}>
                    <HStack style={rowMargin}>
                      <VStack style={case4}>
                        <Text style={titleText}>시험명</Text>
                      </VStack>
                      <Text style={mainText2}> {item.testNm}</Text>
                    </HStack>
                  </Pressable>
                  <HStack style={rowMargin}>
                    <VStack style={case4}>
                      <Text style={titleText}>교사</Text>
                    </VStack>
                    <Heading style={mainText}> {item.teacherNm}</Heading>
                  </HStack>
                  <HStack style={rowMargin}>
                    <VStack style={case4}>
                      <Text style={titleText}>시험일</Text>
                    </VStack>
                    <Heading style={mainText}> {item.regDate}</Heading>
                  </HStack>
                  <HStack style={rowMargin}>
                    <VStack style={case4}>
                      <Text style={titleText}>선택여부</Text>
                    </VStack>
                    {cumulativeReportStore.TestIdModel2.indexOf(item.testId) === -1 ? (
                      <Button
                        variant="outline"
                        colorScheme="gray"
                        style={unSellect}
                        onPress={() => {
                          buttonPress(item);
                        }}
                      >
                        <Text style={unSellectText}>미선택</Text>
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        colorScheme="gray"
                        style={sellect}
                        onPress={() => {
                          buttonPress1(item);
                        }}
                      >
                        <Text style={sellectText}>선택됨</Text>
                      </Button>
                    )}
                  </HStack>
                </HStack>
              </VStack>
              <Divider my={3} />
            </VStack>
          ))}

        {cumulativeReportStore.hasMore && (
          <View style={case1}>
            <Box><SmallButton2 onPress={fetchData} text={'더보기'}></SmallButton2></Box>
          </View>
        )}
      </ScrollView> */}
      {/* <FlatBox
          showsHorizontalScrollIndicator={true}
          style={case1}
          data={StudentCumulativeReports}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          //horizontal
          pagingEnabled
          initialNumToRender={5}
          onEndReachedThreshold={1}
          removeClippedSubviews
        /> */}
      <View style={case3}></View>
    </Flex>
  );
};

//Style
const ROOT = {
  height: '100vh',
  marginTop: 20,
};

const case1 = {
  alignSelf: 'flex-end',
  marginRight: 10,
  marginBottom: 10,
};
const case2 = {
  flexDirection: 'column',
};
const case3 = {};
const case4 = {
  width: '23%',
  alignSelf: 'center',
  margin: 1,
  marginLeft: 5,
};

const unSellect = {
  width: 78,
  height: 30,
  borderRadius: 10,
  backgroundColor: 'white',
  borderWidth: 1,
};

const unSellectText = {
  width: 60,
  height: 20,
  fontSize: 16,
  fontWeight: 'normal',
  fontStyle: 'normal',
  letterSpacing: 0,
  textAlign: 'center',
  fontFamily: 'Roboto',
  color: '#000000',
};
const sellect = {
  width: 78,
  height: 30,
  borderRadius: 10,
  borderWidth: 1,
  backgroundColor: '#8d9ac5',
};

const sellectText = {
  width: 60,
  height: 20,
  fontSize: 16,
  fontWeight: 'normal',
  fontStyle: 'normal',
  letterSpacing: 0,
  textAlign: 'center',
  fontFamily: 'Roboto',
  color: '#ffffff',
};
const titleText = {
  fontFamily: 'robotto',
  fontSize: 14,
  fontWeight: 'normal',
  fontStyle: 'normal',
  lineHeight: 22,
  letterSpacing: 0,
  textAlign: 'left',
  color: '#5a5a5a',
};
const mainText = {
  width: '80%',
  fontFamily: 'robotto',
  fontSize: 18,
  fontWeight: 'normal',
  fontStyle: 'normal',
  lineHeight: 28,
  letterSpacing: 0,
  textAlign: 'left',
  color: '#000000',
};

const table = {
  marginLeft: 20,
  marginRight: 20,
  // borderBottomWidth: 1,
};

const button = {
  backgroundColor: '#8d9ac5',
  marginBottom: 3,
  marginLeft: 20,
  marginRight: 20,
  marginTop: 20,
};

const searchingBox = {
  width: 300,
  height: 350,
  backgroundColor: 'transparent',
  borderStyle: 'solid',
  borderColor: '#707070',
  flexDirection: 'column',
};
const SelectStyle = {
  marginTop: 10,
  marginBottom: 10,
  marginRight: 21,
  marginLeft: 21,
  width: 250,
  height: 49,
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: '#707070',
};
const SelectStyle2 = {
  // marginTop: 10,
  marginBottom: 10,
  // marginRight: 21,

  width: '100%',
  height: 49,
  borderStyle: 'solid',
  // borderWidth: 1,
  borderColor: '#707070',
};
const searchButton = {
  marginTop: 10,
  marginLeft: 112.5,
  marginRight: 112.5,
  padding: 0,
  width: 75,
  height: 40,
  borderRadius: 5,
  backgroundColor: '#FFFFFF',
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: '#707070',
};
const searchButton2 = {
  marginTop: 5,
  marginLeft: 10,
  marginLeft: 10,
  padding: 0,
  width: '100%',
  height: '100%',
  borderRadius: 5,
  backgroundColor: '#8d9ac5',
  borderStyle: 'solid',
};
const searchButtonText1 = {
  fontFamily: 'robotto',
  fontSize: 20,
  fontWeight: 'normal',
  fontStyle: 'normal',
  lineHeight: 27,
  letterSpacing: 0,
  textAlign: 'center',
  color: '#FFFFFF',
};
const searchButtonText2 = {
  fontFamily: 'robotto',
  fontSize: 20,
  fontWeight: 'normal',
  fontStyle: 'normal',
  lineHeight: 27,
  letterSpacing: 0,
  textAlign: 'center',
  color: '#FFFFFF',
};
const rowMargin = {
  marginBottom: 5,
};
const bodyScrollViewStyle = {
  flex: 1,
  marginTop: 10,
};

const mainText2 = {
  width: '80%',
  fontFamily: 'robotto',
  fontSize: 18,
  fontWeight: 'normal',
  fontStyle: 'normal',
  lineHeight: 28,
  letterSpacing: 0,
  textAlign: 'left',
  color: '#8d9ac5',
  textDecorationLine: 'underline',
};
export default studentReportCumulative;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function PodcastCard(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="147px"
      height="234px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "PodcastCard")}
    >
      <Text
        fontFamily="Roboto"
        fontSize="14px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="16.40625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="64.96%"
        bottom="21.37%"
        left="0%"
        right="6.12%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Miam isn’t the best place to live"
        {...getOverrideProps(
          overrides,
          "Miam isn\u2019t the best place to live"
        )}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="12px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="18px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="92.31%"
        bottom="0%"
        left="16.33%"
        right="42.18%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="John Smith"
        {...getOverrideProps(overrides, "John Smith")}
      ></Text>
      <Image
        position="absolute"
        top="92.74%"
        bottom="0.43%"
        height="6.84%"
        left="0%"
        right="89.12%"
        width="10.88%"
        borderRadius="999px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "03w")}
      ></Image>
      <Text
        fontFamily="Roboto"
        fontSize="12px"
        fontWeight="400"
        color="rgba(137,143,151,1)"
        lineHeight="18px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="83.76%"
        bottom="8.55%"
        left="16.33%"
        right="51.7%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="24:15:05"
        {...getOverrideProps(overrides, "24:15:05")}
      ></Text>
      <View
        position="absolute"
        top="84.62%"
        bottom="9.83%"
        left="1.36%"
        right="89.8%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Icons/Time")}
      ></View>
      <View
        position="absolute"
        top="85.47%"
        bottom="0.85%"
        left="78.23%"
        right="0%"
        boxShadow="0px 5px 50px rgba(0.20000000298023224, 0.4117647111415863, 1, 0.699999988079071)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Icons/Play Small")}
      ></View>
      <Image
        position="absolute"
        top="0%"
        bottom="41.88%"
        height="58.12%"
        left="0%"
        right="0%"
        width="100%"
        borderRadius="16px 16px 0px 16px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "image 3")}
      ></Image>
    </View>
  );
}

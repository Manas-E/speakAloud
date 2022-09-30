/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function PodcastMiniDetail(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="309px"
      height="64px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "PodcastMiniDetail")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="8px 8px 0px 8px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(7,13,21,1)"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
      <View
        position="absolute"
        top="25%"
        bottom="25%"
        left="84.47%"
        right="5.18%"
        boxShadow="0px 5px 50px rgba(0.20000000298023224, 0.4117647111415863, 1, 0.699999988079071)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Icons/Play Small")}
      ></View>
      <Text
        fontFamily="Roboto"
        fontSize="14px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="23.80000114440918px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="17.19%"
        bottom="45.31%"
        left="5.18%"
        right="27.51%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="About flow and our motivations..."
        {...getOverrideProps(overrides, "About flow and our motivations...")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="51.56%"
        bottom="17.19%"
        left="5.18%"
        right="51.46%"
        {...getOverrideProps(overrides, "Group")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="12px"
          fontWeight="400"
          color="rgba(137,143,151,1)"
          lineHeight="20.400001525878906px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="23.05.2019         24:15:05"
          {...getOverrideProps(overrides, "23.05.2019 24:15:05")}
        ></Text>
        <View
          position="absolute"
          top="15%"
          bottom="20%"
          left="50%"
          right="40.3%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Icons/Time")}
        ></View>
      </View>
    </View>
  );
}

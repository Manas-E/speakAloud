/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Divider, Flex, Image, Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
import '../src/App.css'

export default function ReviewCard(props) {
  const { overrides, ...rest } = props;
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
    <Flex
      gap="0"
      width="560px"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"

      {...rest}
      {...getOverrideProps(overrides, "ReviewCard")}
    >
 
      <Flex
        gap="24px"
        direction="column"
        width="560px"
        grow="1"
        basis="560px"
        alignSelf="stretch"
        position="relative"
        padding="32px 32px 32px 32px"
        backgroundColor="rgba(255,255,255,1)"
        className="reviewCard"

        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="8px"
          direction="column"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Title")}
        >
          <Flex
            gap="200px"
            width="526px"
            height="24px"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 44px 0px 0px"
            {...getOverrideProps(overrides, "Frame")}
          >
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="25px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Classic Long Sleeve T-Shirt"
              {...getOverrideProps(overrides, "Classic Long Sleeve T-Shirt")}
            ></Text>
            <MyIcon
              width="36px"
              height="36px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              type="bookmark_border"
              {...getOverrideProps(overrides, "MyIcon")}
            ></MyIcon>
          </Flex>
        </Flex>
        <Flex
          gap="8px"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text Group")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="244px"
            grow="1"
            basis="244px"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="832 34th Ave, "
            {...getOverrideProps(overrides, "832 34th Ave,")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="244px"
            grow="1"
            basis="244px"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children=" Seattle, WA 98122"
            {...getOverrideProps(overrides, "Seattle, WA 98122")}
          ></Text>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
        <Flex
          gap="8px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Features")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Information about this product."
            {...getOverrideProps(
              overrides,
              "Information about this product.29766836"
            )}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Information about this product."
            {...getOverrideProps(
              overrides,
              "Information about this product.29766837"
            )}
          ></Text>
        </Flex>
        <Flex
          gap="150px"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="24px 0px 24px 0px"
          {...getOverrideProps(overrides, "Buttons")}
        >
          <Badge
            display="flex"
            gap="10px"
            width="150px"
            height="48px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="32px"
            backgroundColor="rgba(68,176,238,1)"
            fontSize="12px"
            lineHeight="12px"
            size="small"
            variation="default"
            children="New!"
            {...getOverrideProps(overrides, "Badge29766838")}
          ></Badge>
          <Badge
            display="flex"
            gap="10px"
            width="150px"
            height="48px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="32px"
            backgroundColor="rgba(68,176,238,1)"
            fontSize="12px"
            lineHeight="12px"
            size="small"
            variation="default"
            children="New!"
            {...getOverrideProps(overrides, "Badge34592694")}
          ></Badge>
        </Flex>
      </Flex>
    </Flex>
    </div>
    );
}

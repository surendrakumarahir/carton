import * as React from 'react';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {Dimensions, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PaperCard = ({data, imagePath}) => (
  <Card style={{width: wp(46), marginHorizontal: wp(1), marginVertical: wp(2)}}>
    {/*<Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="folder" />} />*/}
    {/*  {console.log('ccc', `${imagePath}/${data.image}`)}*/}
    <Card.Cover
      source={{
        uri: `${imagePath}/${data.image}`,
      }}
    />
    <Card.Content>
      {/*<Title>Card title</Title>*/}
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: '#000',
          textAlign: 'center',
        }}>
        {data.name}
      </Text>
        <Paragraph> Corrugated Card 5Ply Heavy Duty Cartons,</Paragraph>
      {/*<Paragraph>{props.data.details}</Paragraph>*/}
    </Card.Content>
    <Card.Actions>
      <Button>Buy</Button>
      <Button>View</Button>
    </Card.Actions>
  </Card>
);

export default PaperCard;

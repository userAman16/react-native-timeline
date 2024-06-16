import React from 'react';
import {View, Image} from 'react-native';
import moment from 'moment';

export default [
  {
    title: {
      content: 'mango',
    },
    description: {
      content: 'Comment goes right here',
    },
    time: {
      content: moment().format('ll'),
      style: {
        paddingTop: 8,
      },
    },
    icon: () => (
      <View>
        <Image
          source={require('../../assets/images/1.jpg')}
          style={{
            width: 45,
            height: 45,
            borderRadius: 25,
            borderWidth: 3,
            borderColor: '#fff',
          }}
        />
      </View>
    ),
  },
  {
    title: {
      content: 'Orange',
    },
    description: {
      content: 'Comment goes right here',
    },
    time: {
      content: moment().format('ll'),
      style: {
        paddingTop: 8,
      },
    },
    icon: () => (
      <View>
        <Image
          source={require('../../assets/images/2.jpg')}
          style={{
            width: 35,
            height: 35,
            borderRadius: 20,
            borderWidth: 3,
            borderColor: '#FFF',
          }}
        />
      </View>
    ),
  },
  {
    title: {
      content: 'apple',
    },
    description: {
      content: 'Comment goes right here',
    },
    time: {
      content: moment().format('ll'),
      style: {
        paddingTop: 8,
      },
    },
    icon: () => (
      <View>
        <Image
          source={require('../../assets/images/4.jpg')}
          style={{
            width: 35,
            height: 35,
            borderRadius: 20,
            borderWidth: 3,
            borderColor: '#e0ffef',
          }}
        />
      </View>
    ),
  },
  {
    title: {
      content: 'blue',
    },
    description: {
      content: 'Comment goes right here',
    },
    time: {
      content: moment().format('ll'),
      style: {
        paddingTop: 8,
      },
    },
    icon: () => (
      <View>
        <Image
          source={require('../../assets/images/5.jpg')}
          style={{
            width: 45,
            height: 45,
            borderRadius: 25,
            borderWidth: 3,
            borderColor: '#f9f0ca',
          }}
        />
      </View>
    ),
  },
  {
    title: {
      content: 'Orange',
    },
    description: {
      content: 'Comment goes right here',
    },
    time: {
      content: moment().format('ll'),
      style: {
        paddingTop: 8,
      },
    },
    icon: () => (
      <View>
        <Image
          source={require('../../assets/images/2.jpg')}
          style={{
            width: 35,
            height: 35,
            borderRadius: 20,
            borderWidth: 3,
            borderColor: '#FFF',
          }}
        />
      </View>
    ),
  },
  {
    title: {
      content: 'Orange',
    },
    description: {
      content: 'Comment goes right here',
    },
    time: {
      content: moment().format('ll'),
      style: {
        paddingTop: 8,
      },
    },
    icon: () => (
      <View>
        <Image
          source={require('../../assets/images/2.jpg')}
          style={{
            width: 35,
            height: 35,
            borderRadius: 20,
            borderWidth: 3,
            borderColor: '#FFF',
          }}
        />
      </View>
    ),
  },
];

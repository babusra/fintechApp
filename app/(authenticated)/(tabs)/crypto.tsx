import { View, Text,Image } from 'react-native';
import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Currency } from '@/interfaces/crypto';
import { Ionicons } from '@expo/vector-icons';

const Page = () => {
  const currencies = useQuery({
    queryKey: ['currencies'],
    queryFn: () => fetch('/api/listings').then((res) => res.json()),
  });

  const ids = currencies?.data
    ?.map((currency: Currency) => currency.id)
    .join(',');
  console.log('ids', ids);

  const data = useQuery({
    queryKey: ['info', ids],
    queryFn: () => fetch(`/api/info?ids=${ids}`).then((res) => res.json()),
    enabled: !!ids,
  });

  console.log(data.data);
  
  return (
    <View>
      {currencies?.data?.map((currency: Currency) => (
        <View>
          {/* <Ionicons name={}/> */}
        <Text key={currency.id}>{currency.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default Page;

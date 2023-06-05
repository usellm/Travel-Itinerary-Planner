import React from 'react';
import { useRouter } from 'next/router';
import ScheduleGeneratorPage from '../ScheduleGeneratorPage';

const Place = () => {
  const router = useRouter();
  const { place } = router.query;

  return <ScheduleGeneratorPage endCity={place} />;
};

export default Place;
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionHeaders1 from '../components/headers/IndexSectionHeaders1';
import IndexSectionFeatures2 from '../components/features/IndexSectionFeatures2';
import IndexSectionAbout3 from '../components/about/IndexSectionAbout3';
import IndexSectionCta7 from '../components/cta/IndexSectionCta7';
import IndexSectionTestimonials5 from '../components/testimonials/IndexSectionTestimonials5';
import IndexSectionFaq8 from '../components/faq/IndexSectionFaq8';
import IndexSectionFooter9 from '../components/footer/IndexSectionFooter9';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionHeaders1 />
      <IndexSectionFeatures2 />
      <IndexSectionAbout3 />
      <IndexSectionCta7 />
      <IndexSectionTestimonials5 />
      <IndexSectionFaq8 />
      <IndexSectionFooter9 />
    </React.Fragment>
  );
}


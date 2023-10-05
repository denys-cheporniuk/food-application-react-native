import React, {useMemo, useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const resultsByPrice = useMemo(() => {
    return results.reduce((acc, result) => {
      if (acc[result.price]) {
        acc[result.price].push(result);
      } else {
        acc[result.price] = [result];
      }

      return acc;
    }, {})
  }, [results]);

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />

      {errorMessage && <Text>{errorMessage}</Text>}

      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={resultsByPrice['$'] || []}
        />
        <ResultsList
          title="Bit Pricier"
          results={resultsByPrice['$$'] || []}
        />
        <ResultsList
          title="Big spender"
          results={resultsByPrice['$$$'] || []}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({})

export default SearchScreen;

import React, { useState } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import Yelp from '../api/Yelp';



const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try { 
            const response = await Yelp.get('/search', {
                params: {
                    limit: 10,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses)
        } catch (err){
            setErrorMessage('Ooops something went wrong');
        }      
    }

    return (
        <View>
            <SearchBar 
               term={term}
               onTermChange={setTerm} 
               onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>Number of results found: { results.length } </Text>
            
        </View>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;
import { View , Image , ScrollView , TextInput , FlatList , TouchableHighlight } from 'react-native';
import Constants from 'expo-constants'
import data from '../../data/search-data.json'

export default function Search({navigation}) {
    return (
            <View style={{marginTop: Constants.statusBarHeight , flex:1}}>
                <View style={{padding:10}}>
                    <TextInput
                        style={{backgroundColor:"#DADADA" , paddingVertical:5 , paddingHorizontal:10 , borderRadius:10}}
                        placeholder='Buscar'
                    />
                </View>
                <ScrollView>
                    <FlatList
                        data={data.post}
                        renderItem={({item: post}) => (
                            <TouchableHighlight style={{width:"33%" , margin:1}} onPress={()=> navigation.navigate('SearchDetail' , {postId: post.id})}>
                                <Image style={{height:100}} source={{uri:post.image}}></Image>
                            </TouchableHighlight>
                        )}
                        numColumns={3}
                        scrollEnabled={false}
                    />
                </ScrollView>
            </View>
    );
}
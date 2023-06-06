import { View , Image , ScrollView , TextInput , FlatList} from 'react-native';
import Constants from 'expo-constants'
import data from '../../data/data.json'

export default function Search() {
    return (
            <View style={{marginTop: Constants.statusBarHeight}}>
                <ScrollView>

                    <View style={{padding:10}}>
                        <TextInput
                        style={{backgroundColor:"#DADADA" , paddingVertical:5 , paddingHorizontal:10 , borderRadius:10}}
                        placeholder='Buscar'
                        />
                    </View>
                    <FlatList
                        data={data.publicaciones}
                        renderItem={({item: imagen}) => (
                            <Image style={{width:"33%" , margin:1 , height:100}} source={{uri:imagen.images}}></Image>
                        )}
                        numColumns={3}
                        scrollEnabled={false}
                    />
                    
                </ScrollView>
            </View>
    );
}
import { Text, View , Image , ScrollView , TextInput} from 'react-native';
import Constants from 'expo-constants'
import data from '../../data/data.json'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function EditProfile() {
    return (
        <ScrollView>
            <View style={{marginTop: Constants.statusBarHeight}}>
                    <View style={{alignItems:"center" , margin:5}}>
                        <Image style={{width:75,height:75 , borderRadius:100 , marginBottom:5}} source={{uri:'https://instagram.ffdo2-1.fna.fbcdn.net/v/t51.2885-19/43818140_2116018831763532_3803033961098117120_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffdo2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=8rrGORFcBx0AX-ALIFn&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfAhjcSMhgczSQcHN9pYlF9MOn_7sAmGky0vH_K_Wo0iSg&oe=647CC632&_nc_sid=a1ad6c'}}></Image>
                        <TouchableOpacity>
                            <Text style={{fontSize:15 , color:"blue"}}>Edit picture or avatar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{padding:10}}>
                        <Text style={{fontSize:15 , fontWeight:500}}>Name</Text>
                        <TextInput 
                            placeholder='Add Name'
                            defaultValue={data.userInformation.name}
                        />
                        <View style={{ backgroundColor: 'black', height: 1 , marginBottom:7 }} />

                        <Text style={{fontSize:15 , fontWeight:500}}>UserName</Text>
                        <TextInput 
                            placeholder='Add User Name'
                            defaultValue={data.userInformation.username}
                        />
                        <View style={{ backgroundColor: 'black', height: 1 , marginBottom:7 }} />

                        <Text style={{fontSize:15 , fontWeight:500}}>Bio</Text>
                        <TextInput 
                            placeholder='Add Bio'
                            defaultValue={data.userInformation.description}
                        />
                        <View style={{ backgroundColor: 'black', height: 1 , marginBottom:7 }} />

                        <Text style={{fontSize:15 , fontWeight:500}}>Link</Text>
                        <TextInput 
                            placeholder='Add Link'
                            defaultValue={data.userInformation.link}
                        />
                        <View style={{ backgroundColor: 'black', height: 1 , marginBottom:7 }} />
                        <TouchableOpacity style={{backgroundColor:"blue" , alignSelf:"flex-end" , paddingVertical:7 , paddingHorizontal:15 , borderRadius:7 , marginTop:10}}>
                            <Text style={{color:"#fff" , fontSize:15}}>Save</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </ScrollView>
    );
}

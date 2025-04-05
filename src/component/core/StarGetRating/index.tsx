import { Image, View } from "react-native";
import { commonStyles } from "../../../themes/StyleGuides";
import { Icon } from "../../../assest";

 export const StarGetRating: React.FC<StarRatingProps> = ({rating,size,align}) => {
    const totalStars = 5;
  
    return (
      <View style={{...commonStyles.horizontalView,marginLeft:"9%",alignSelf:align?align:"auto"}}>
        {Array.from({length: totalStars}, (_, index) => (
          <Image
            key={index}
            source={index < rating ? Icon.Star : Icon.UnselectedStart}
            style={{
              width:  size?size:20,
              height: size?size:20,
              resizeMode: 'contain',
              marginRight: 2,
            }}
          />
        ))}
      </View>
    );
  };
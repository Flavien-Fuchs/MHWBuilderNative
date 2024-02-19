import { colors } from "../../../utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    globalItemContainer: {
      position: 'relative',
      zIndex: 100,
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
    },
    itemNavBar: {
      justifyContent: "start"
    },
    closeButton: {
      position: 'absolute',
      top: 10, // Ajoutez la valeur que vous souhaitez
      right: 10, // Ajoutez la valeur que vous souhaitez
      color: colors.neutralBlackColor, // Remplacez par votre couleur
      transition: '0.2s', // Cela peut ne pas être nécessaire en React Native
      padding: 8,
    },
    searchBar: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    input: {
        width: '90%',
        marginVertical: 0.5 * 16,
    },
    filters: {
      // Style pour les filtres
    },
    filterDropdowns: {
      // Style pour les dropdowns de filtre
    },
    filterDropdown: {
      // Style pour un dropdown de filtre individuel
    },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "center"
    },
    item: {
        minWidth: 350,
        backgroundColor: colors.backgroundItem,
        padding: 16, // Ajoutez la valeur que vous souhaitez
        color: colors.neutralWhiteColor, // Ajoutez votre couleur de texte
        cursor: 'pointer', // Pas nécessaire en React Native
        // Ajoutez l'ombre de la boîte si nécessaire
        shadowColor: colors.neutralBlackColor,
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    globalInfos: {
      // Style pour les informations globales
    },
    paragraphList: {
      // Style pour le texte de la liste de paragraphes
    },
    rarity: {
      // Style pour la rareté
    },
    detailsInfos: {
      // Style pour les informations détaillées
    },
    armorImage: {
      // Style pour l'image d'armure
    },
    stats: {
      fontSize: 16,
    },
    defense: {
      // Style pour la défense
    },
    defenseIcon: {
      // Style pour l'icône de défense
    },
    skillsList: {
      // Style pour la liste des compétences
    },
    hideSkills: {
      // Style pour cacher les compétences
    },
  });
  
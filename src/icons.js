import Icon from 'react-native-vector-icons/Ionicons'

const names = ['add']

const icons = {}

export const iconsLoaded = new Promise((resolve, reject) => {
  Promise.all(names.map(iconName => Icon.getImageSource(`ios-${iconName}`, 30, '#4796ef')))
    .then(sources => {
      names.forEach((iconName, idx) => (icons[iconName] = sources[idx]));
      resolve(true);
    })
})

export default icons

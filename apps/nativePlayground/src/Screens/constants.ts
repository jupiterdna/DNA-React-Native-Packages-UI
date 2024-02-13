import {
  CameraIconOutline,
  PencilRenameIconOutline,
  ShareIconOutline,
} from '@rndna/icon';
import {DNAFabItemTypes} from '@rndna/fab';

export const optionItems = [
  {id: '1', label: 'Option 1', checked: false},
  {id: '2', label: 'Option 2', checked: false},
  {id: '3', label: 'Option 3', checked: false, disabled: true},
  {id: '4', label: 'Option 4', checked: true, disabled: true},
];

export const FabItems: DNAFabItemTypes[] = [
  {
    icon: ShareIconOutline,
    title: 'Write',
    onPress: () => {
      console.log('Clicked Write');
    },
  },
  {
    icon: CameraIconOutline,
    title: 'Camera',
    onPress: () => {
      console.log('Clicked Camera');
    },
  },
  {
    icon: PencilRenameIconOutline,
    title: 'Share',
    onPress: () => {
      console.log('Clicked Share');
    },
  },
];

export const avatarGroup = [
  {
    alt: 'John Doe Picture',
    id: 'john-doe',
    name: 'John Doe',
    src: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    alt: 'Jane Smith Picture',
    id: 'jane-smith',
    name: 'Jane Smith',
    src: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    alt: 'Andrei Colin Picture',
    id: 'andrei-colin',
    name: 'Andrei Colin',
    src: '',
  },
  {
    alt: 'Cendy Carter Picture',
    id: 'cendy-carter',
    name: 'Cendy Carter',
    src: 'https://images.pexels.com/photos/3771639/pexels-photo-3771639.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    alt: 'James Brown Picture',
    id: 'james-brown',
    name: 'James Brown',
    src: '',
  },
];

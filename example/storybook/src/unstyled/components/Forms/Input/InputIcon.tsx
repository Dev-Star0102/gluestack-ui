import React from 'react';

import {
  Input,
  VStack,
  Icon,
  SearchIcon,
  InputIcon,
  InputSlot,
  InputInput,
} from '../../../ui-components';
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';

const InputStory = ({ ...props }: any) => {
  const [value, setValue] = React.useState('');

  return (
    <VStack space="md" w="$full">
      <Input {...props} size="sm">
        <InputInput
          onChange={(e: any) => {
            setValue(e.nativeEvent.text);
          }}
          value={value}
          placeholder="Enter Text here"
        />
        <InputSlot pr="$4">
          <InputIcon as={SearchIcon} />
        </InputSlot>
      </Input>

      <Input {...props} size="md">
        <InputInput
          onChange={(e: any) => {
            setValue(e.nativeEvent.text);
          }}
          value={value}
          placeholder="Enter Text here"
        />
        <InputSlot pr="$4">
          <InputIcon as={SearchIcon} />
        </InputSlot>
      </Input>

      <Input {...props} size="lg" isDisabled>
        <InputInput
          onChange={(e: any) => {
            setValue(e.nativeEvent.text);
          }}
          value={value}
          placeholder="Enter Text here"
        />
        <InputSlot pr="$4">
          <InputIcon as={SearchIcon} />
        </InputSlot>
      </Input>

      <Input {...props} size="xl" isInvalid>
        <InputInput
          onChange={(e: any) => {
            setValue(e.nativeEvent.text);
          }}
          value={value}
          placeholder="Enter Text here"
        />
        <InputSlot pr="$4">
          <InputIcon as={SearchIcon} />
        </InputSlot>
      </Input>
    </VStack>
  );
};

export default InputStory;

export { Input, VStack, Icon, SearchIcon, EyeIcon, EyeOffIcon };

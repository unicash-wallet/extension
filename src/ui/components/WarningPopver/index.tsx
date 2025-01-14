import { Button } from '../Button';
import { Column } from '../Column';
import { Popover } from '../Popover';
import { Row } from '../Row';
import { Text } from '../Text';

export const WarningPopver = ({ text, onClose }: { text: string; onClose: () => void }) => {
  return (
    <Popover onClose={onClose}>
      <Column justifyCenter itemsCenter>
        <Text text={'WARNING'} textCenter preset="title-bold" color="orange" />
        <Column mt="lg">
          <Text text={text} textCenter />
        </Column>

        <Row full mt="lg">
          <Button
            text="OK"
            full
            preset="primary"
            onClick={(e) => {
              if (onClose) {
                onClose();
              }
            }}
          />
        </Row>
      </Column>
    </Popover>
  );
};

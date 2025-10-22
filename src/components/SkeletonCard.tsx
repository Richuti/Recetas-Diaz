import { Card, CardBody, SkeletonText } from "@chakra-ui/react";


function SkeletonCard() {
  return (
    <Card boxShadow="lg">
      <CardBody>
        <SkeletonText noOfLines={1} mt="1" spacing="4" skeletonHeight="220" />
        <SkeletonText noOfLines={2} mt="4" spacing="4" skeletonHeight="2" />
      </CardBody>
    </Card>
  );
}

export default SkeletonCard;

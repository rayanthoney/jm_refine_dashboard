import { Place } from '@mui/icons-material';
import { Link } from '@pankod/refine-react-router-v6';
import { Typography, Box, Card, CardMedia, CardContent, Stack } from '@pankod/refine-mui';

import { PropertyCardProps } from 'interfaces/property';

const PropertyCard = ({ id, title, location, price, photo }: PropertyCardProps) => {
  return (
    <Card
      component={Link}
    >

    </Card>
  )
}

export default PropertyCard
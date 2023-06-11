import {
  Box,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from '@mui/material'

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#f0f0f0', py: 2 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">About Us</Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              sagittis tellus vitae neque tempus, sed fringilla tellus
              tincidunt.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Contact</Typography>
            <Typography variant="body2">
              Address: 123 Main St, City, Country
              <br />
              Phone: +1 234 567 890
              <br />
              Email: info@example.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Links</Typography>
            <List>
              <ListItem>
                <Link href="/" underline="hover">
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/about" underline="hover">
                  About
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/services" underline="hover">
                  Services
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/contact" underline="hover">
                  Contact
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Follow Us</Typography>
            <List>
              <ListItem>
                <Link href="https://twitter.com" underline="hover">
                  Twitter
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://facebook.com" underline="hover">
                  Facebook
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://instagram.com" underline="hover">
                  Instagram
                </Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

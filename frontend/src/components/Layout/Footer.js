import { Button, Grid, Typography } from "@mui/material"

const Footer = () => {
    return (
        <div>
            <Grid className="bg-black text-white w-full mt-10 text-center"
                container
                sx={{ bgcolor: "black", color: "white", py: 3 }}
            >
                <Grid className="pt-7" item xs={12} sm={6} md={3}>
                    <Typography className="pb-5 font-bold" variant="h6">Company</Typography>
                    <div><Button className="pb-5" variant="h6">About</Button></div>
                    <div><Button className="pb-5" variant="h6">Blog</Button></div>
                    <div><Button className="pb-5" variant="h6">Jobs</Button></div>
                    <div><Button className="pb-5" variant="h6">Press</Button></div>
                    <div><Button className="pb-5" variant="h6">Partner</Button></div>
                </Grid>
                <Grid className="pt-7" item xs={12} sm={6} md={3}>
                    <Typography className="pb-5 font-bold" variant="h6">Solutions</Typography>
                    <div><Button className="pb-5" variant="h6">Marketing</Button></div>
                    <div><Button className="pb-5" variant="h6">Analytics</Button></div>
                    <div><Button className="pb-5" variant="h6">Commerce</Button></div>
                    <div><Button className="pb-5" variant="h6">Insights</Button></div>
                    <div><Button className="pb-5" variant="h6">Support</Button></div>
                </Grid>
                <Grid className="pt-7" item xs={12} sm={6} md={3}>
                    <Typography className="pb-5 font-bold" variant="h6">Documentation</Typography>
                    <div><Button className="pb-5" variant="h6">Guides</Button></div>
                    <div><Button className="pb-5" variant="h6">API</Button></div>
                </Grid>
                <Grid className="pt-7" item xs={12} sm={6} md={3}>
                    <Typography className="pb-5 font-bold" variant="h6">Legal</Typography>
                    <div><Button className="pb-5" variant="h6">Claim</Button></div>
                    <div><Button className="pb-5" variant="h6">Privacy</Button></div>
                    <div><Button className="pb-5" variant="h6">Terms</Button></div>
                </Grid>
                <Grid className="pt-16" item xs={12}>
                    <Typography variant="body2" component="p" align="center">
                        &copy; 2023 My Company.All rights reserved.
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                        Made with love &hearts; by me.
                    </Typography>
                </Grid>
            </Grid>
        </div >
    )
}

export default Footer
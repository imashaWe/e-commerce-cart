import {Box, Skeleton, Stack} from "@mui/material";

export default function CardSkeleton() {
    return (
        <Stack spacing={1} sx={{padding:2}}>
            <Skeleton variant="rectangular"  height={118}/>
            <Box sx={{ pt: 0.5 }}>
                <Skeleton width="60%" />
                <Skeleton />
                <Skeleton />
            </Box>
        </Stack>
    );
}
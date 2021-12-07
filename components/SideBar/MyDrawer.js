import React from "react";

function MyDrawer() {
  return (
    <Box safeArea flex={1}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={home} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </Box>
  );
}

export default MyDrawer;

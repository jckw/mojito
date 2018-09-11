export const getBounds = ({ north, east, south, west }) => ({
    type: 'Polygon',
    coordinates: [[[east, north], [west, north], [west, south], [east, south], [east, north]]]
})

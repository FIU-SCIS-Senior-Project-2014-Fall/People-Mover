package peopleMoverDB.model;

public class WayPoints {
private String WayID;
private String StopId;
private String RouteId;
public String getRouteId() {
	return RouteId;
}
public void setRouteId(String routeId) {
	RouteId = routeId;
}
private String Latitude;
private String Longitude;
public String getWayID() {
	return WayID;
}
public void setWayID(String wayID) {
	WayID = wayID;
}
public String getStopId() {
	return StopId;
}
public void setStopId(String stopId) {
	StopId = stopId;
}
public String getLatitude() {
	return Latitude;
}
public void setLatitude(String latitude) {
	Latitude = latitude;
}
public String getLongitude() {
	return Longitude;
}
public void setLongitude(String longitude) {
	Longitude = longitude;
}
}

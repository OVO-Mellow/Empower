import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// ==================== LOGO COMPONENT ====================
function Logo() {
  return (
    <View style={logoStyles.container}>
      <View style={logoStyles.logo}>
        <View style={logoStyles.logoIcon}>
          <Text style={logoStyles.iconText}>🎓</Text>
        </View>
        <View style={logoStyles.logoText}>
          <Text style={logoStyles.logoMain}>EMPOWER</Text>
          <Text style={logoStyles.logoSubtitle}>Empowering the nation</Text>
        </View>
      </View>
    </View>
  );
}

const logoStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: '#000000',
    paddingVertical: 24,
    paddingHorizontal: 32,
    borderRadius: 15,
    shadowColor: '#00e5ff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.553,
    shadowRadius: 25,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#333333',
  },
  logoIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#0199ff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#0199ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 4,
  },
  iconText: {
    fontSize: 32,
  },
  logoText: {
    alignItems: 'flex-start',
  },
  logoMain: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    lineHeight: 28,
  },
  logoSubtitle: {
    fontSize: 14,
    color: '#e2e8f0',
    marginTop: 8,
  },
});

// ==================== COURSES (corrected grouping) ====================
const courses = [
  // ==== SHORT COURSES ====
  {
    id: 1,
    title: "Child Minding",
    fee: "R750",
    duration: "Short Course",
    purpose: "To provide basic child and baby care.",
    content: "Birth to 1 year old needs and Educational Toys .",
    image:
      "https://th.bing.com/th/id/R.bfc8480892725922f4ba0b085a44cc4c?rik=fTYF3A%2bTfzMNzw&pid=ImgRaw&r=0",
  },
  {
    id: 2,
    title: "Cooking",
    fee: "R750",
    duration: "Short Course",
    purpose: "To prepare and cook nutritious family meals.",
    content: "Nutritional requirements for a healthy body,types of protine, carbs and vegetables.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Garden Maintenance",
    fee: "R750",
    duration: "Short Course",
    purpose: "Basic keeping of gardens and yard work.",
    content: "Planting, watering, trimming, and outdoor safety.",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.JqhmaJcU2oyvgXJhy2ZLLwHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
  },

  // ==== 6-MONTH COURSES ====
  {
    id: 4,
    title: "First Aid",
    fee: "R1500",
    duration: "6-Month Course",
    purpose: "First aid awareness and emergency response skills.",
    content: "CPR, bandaging, bleeding control, burns, emergency care.",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.QAOCA5u7UeuaA4k1RhNa5gHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 5,
    title: "Sewing",
    fee: "R1500",
    duration: "6-Month Course",
    purpose: "Teach sewing, mending, and machine handling.",
    content: "Stitching, fabric cutting, pattern reading, repairs.",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.1s8rFbnJD0Grf1VoaBlL5wHaE7?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 6,
    title: "Landscaping",
    fee: "R1500",
    duration: "6-Month Course",
    purpose: "Teach gardening and landscaping techniques.",
    content: "Planting, soil care, pruning, and design basics.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Life Skills",
    fee: "R1500",
    duration: "6-Month Course",
    purpose: "Decision-making, communication, and confidence building.",
    content: "Goal setting, teamwork, personal development modules.",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.8tASPqmINSePgT9O0A4UmwHaE7?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

// ==================== HEADER ====================
function HeaderBar({ navigation, canGoBack }) {
  return (
    <View style={{ marginBottom: 18 }}>
      {/* Added Logo Component */}
      <Logo />
      
      <View style={styles.headerControls}>
        <TouchableOpacity
          style={[styles.smallControl, !canGoBack && styles.disabledControl]}
          onPress={() => navigation.goBack()}
          disabled={!canGoBack}
        >
          <Text style={styles.smallControlText}>← Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.smallControl}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.smallControlText}>🏠 Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// ==================== LOGIN SCREEN ====================
function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <HeaderBar navigation={navigation} canGoBack={false} />

      <Text style={styles.sectionTitle}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.ctaButton}
        onPress={() => navigation.reset({ index: 0, routes: [{ name: "Home" }] })}
      >
        <Text style={styles.ctaText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.link}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// ==================== REGISTER SCREEN ====================
function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <HeaderBar navigation={navigation} canGoBack={true} />

      <Text style={styles.sectionTitle}>Create New Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.ctaButton}
        onPress={() => navigation.reset({ index: 0, routes: [{ name: "Home" }] })}
      >
        <Text style={styles.ctaText}>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// ==================== HOME SCREEN ====================
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <HeaderBar navigation={navigation} canGoBack={false} />

      <Text style={styles.sectionTitle}>Pick a category</Text>
      <Text style={styles.subtitle}>
        Choose between longer (6-month) or short skills courses.
      </Text>

      <View style={styles.categoryRow}>
        <TouchableOpacity
          style={styles.categoryCard}
          onPress={() => navigation.navigate("CourseList", { filter: "6-Month Course" })}
        >
          <Image
            source={{
              uri:
                "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80&auto=format&fit=crop",
            }}
            style={styles.categoryImage}
          />
          <View style={styles.categoryOverlay}>
            <Text style={styles.categoryText}>6-Month Courses</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryCard}
          onPress={() => navigation.navigate("CourseList", { filter: "Short Course" })}
        >
          <Image
            source={{
              uri:
                "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80&auto=format&fit=crop",
            }}
            style={styles.categoryImage}
          />
          <View style={styles.categoryOverlay}>
            <Text style={styles.categoryText}>Short Courses</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.ctaButton, { marginTop: 20 }]}
        onPress={() => navigation.navigate("CourseList")}
      >
        <Text style={styles.ctaText}>Browse All Courses</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// ==================== COURSE LIST ====================
function CourseListScreen({ route, navigation }) {
  const filter = route.params?.filter || null;
  const data = filter ? courses.filter((c) => c.duration === filter) : courses;
  const [selectedCourses, setSelectedCourses] = useState([]);

  const toggleCourseSelection = (course) => {
    setSelectedCourses(prev => {
      const isSelected = prev.some(c => c.id === course.id);
      if (isSelected) {
        return prev.filter(c => c.id !== course.id);
      } else {
        return [...prev, course];
      }
    });
  };

  const isCourseSelected = (course) => {
    return selectedCourses.some(c => c.id === course.id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <HeaderBar navigation={navigation} canGoBack={true} />

      <Text style={styles.sectionTitle}>{filter ? filter : "All Courses"}</Text>
      
      {selectedCourses.length > 0 && (
        <View style={styles.selectionSummary}>
          <Text style={styles.selectionSummaryText}>
            {selectedCourses.length} course{selectedCourses.length > 1 ? 's' : ''} selected
          </Text>
          <TouchableOpacity
            style={styles.applyButton}
            onPress={() => navigation.navigate("Apply", { selectedCourses })}
          >
            <Text style={styles.applyButtonText}>Apply for Selected Courses</Text>
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.courseTile,
              isCourseSelected(item) && styles.selectedCourseTile
            ]}
            onPress={() => toggleCourseSelection(item)}
          >
            <Image source={{ uri: item.image }} style={styles.courseTileImage} />
            <View style={styles.courseTileText}>
              <View style={styles.courseHeader}>
                <Text style={styles.courseTitle}>{item.title}</Text>
                {isCourseSelected(item) && (
                  <Text style={styles.selectedBadge}>✓ Selected</Text>
                )}
              </View>
              <Text style={styles.courseMeta}>
                {item.duration} • {item.fee}
              </Text>
              <Text numberOfLines={2} style={styles.courseSnippet}>
                {item.content}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

// ==================== COURSE DETAIL ====================
function CourseDetailScreen({ route, navigation }) {
  const { course } = route.params;
  const [selectedCourses, setSelectedCourses] = useState([course]);

  const addToSelection = () => {
    // Navigate back to course list with this course pre-selected
    navigation.navigate("CourseList");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <HeaderBar navigation={navigation} canGoBack={true} />

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <Image source={{ uri: course.image }} style={styles.detailImage} />
        <Text style={styles.sectionTitle}>{course.title}</Text>

        <Text style={styles.detailLabel}>Duration</Text>
        <Text style={styles.detailText}>{course.duration}</Text>

        <Text style={styles.detailLabel}>Fee</Text>
        <Text style={styles.detailText}>{course.fee}</Text>

        <Text style={styles.detailLabel}>Purpose</Text>
        <Text style={styles.detailText}>{course.purpose}</Text>

        <Text style={styles.detailLabel}>Content</Text>
        <Text style={styles.detailText}>{course.content}</Text>

        <TouchableOpacity
          style={[styles.ctaButton, { marginTop: 20 }]}
          onPress={addToSelection}
        >
          <Text style={styles.ctaText}>Add to My Selection</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.ctaButton, { backgroundColor: '#4CAF50', marginTop: 10 }]}
          onPress={() => navigation.navigate("Apply", { selectedCourses: [course] })}
        >
          <Text style={styles.ctaText}>Apply Now (This Course Only)</Text>
        </TouchableOpacity>

        <Text style={styles.reminderNote}>
          💡 Tip: You can select multiple courses and apply for them all at once!
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

// ==================== RECEIPT STYLES ====================
const receiptStyles = StyleSheet.create({
  receiptContainer: {
    backgroundColor: '#111',
    padding: 20,
    borderRadius: 12,
    marginTop: 20,
    width: '100%',
    borderWidth: 1,
    borderColor: '#333',
  },
  receiptTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  receiptRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  receiptLabel: {
    color: '#ccc',
    fontSize: 14,
  },
  receiptValue: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  receiptTotalLabel: {
    color: '#00BFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  receiptTotalValue: {
    color: '#00BFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  receiptDivider: {
    height: 1,
    backgroundColor: '#333',
    marginVertical: 10,
  },
  note: {
    color: '#bbb',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 15,
    fontStyle: 'italic',
  },
  courseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
});

// ==================== APPLY SCREEN ====================
function ApplyScreen({ route, navigation }) {
  const { selectedCourses } = route.params;
  
  // Calculate totals
  const calculateTotals = () => {
    let subtotal = 0;
    selectedCourses.forEach(course => {
      const fee = parseInt(course.fee.replace('R', ''));
      subtotal += fee;
    });
    
    const discount = 0.25; // 25% discount for multiple courses
    const discountAmount = subtotal * discount;
    const finalTotal = subtotal - discountAmount;
    
    return { subtotal, discountAmount, finalTotal };
  };

  const { subtotal, discountAmount, finalTotal } = calculateTotals();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <HeaderBar navigation={navigation} canGoBack={true} />

      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text style={[styles.sectionTitle, { fontSize: 22 }]}>Application Sent 🎉</Text>
        <Text style={[styles.subtitle, { textAlign: "center", marginTop: 10 }]}>
          You've applied for {selectedCourses.length} course{selectedCourses.length > 1 ? 's' : ''}
        </Text>

        {/* Receipt Component */}
        <View style={receiptStyles.receiptContainer}>
          <Text style={receiptStyles.receiptTitle}>Payment Receipt</Text>
          
          {/* List selected courses */}
          {selectedCourses.map((course, index) => (
            <View key={course.id} style={receiptStyles.courseItem}>
              <Text style={[receiptStyles.receiptLabel, { flex: 1 }]}>
                {index + 1}. {course.title}
              </Text>
              <Text style={receiptStyles.receiptValue}>{course.fee}</Text>
            </View>
          ))}
          
          <View style={receiptStyles.receiptDivider} />
          
          <View style={receiptStyles.receiptRow}>
            <Text style={receiptStyles.receiptLabel}>Subtotal:</Text>
            <Text style={receiptStyles.receiptValue}>R{subtotal}</Text>
          </View>
          
          <View style={receiptStyles.receiptRow}>
            <Text style={receiptStyles.receiptLabel}>Group Discount (25%):</Text>
            <Text style={[receiptStyles.receiptValue, { color: '#4CAF50' }]}>
              -R{discountAmount.toFixed(0)}
            </Text>
          </View>
          
          <View style={receiptStyles.receiptDivider} />
          
          <View style={receiptStyles.receiptRow}>
            <Text style={receiptStyles.receiptTotalLabel}>Total Amount:</Text>
            <Text style={receiptStyles.receiptTotalValue}>R{finalTotal.toFixed(0)}</Text>
          </View>
          
          <View style={receiptStyles.receiptDivider} />
          
          <View style={receiptStyles.receiptRow}>
            <Text style={receiptStyles.receiptLabel}>Payment Status:</Text>
            <Text style={[receiptStyles.receiptValue, { color: '#4CAF50' }]}>Pending</Text>
          </View>
          
          <View style={receiptStyles.receiptRow}>
            <Text style={receiptStyles.receiptLabel}>Application ID:</Text>
            <Text style={receiptStyles.receiptValue}>EMP{Date.now().toString().slice(-6)}</Text>
          </View>
        </View>

        <Text style={receiptStyles.note}>
          📧 A copy of this receipt has been sent to your email
        </Text>

        <TouchableOpacity
          style={[styles.ctaButton, { marginTop: 30 }]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.ctaText}>Return Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// ==================== APP NAV ====================
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CourseList" component={CourseListScreen} />
        <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
        <Stack.Screen name="Apply" component={ApplyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ==================== STYLES ====================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 18,
    paddingTop: 18,
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    color: "#f2fcffff",
    textAlign: "center",
  },
  headerControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    paddingHorizontal: 10,
  },
  smallControl: {
    backgroundColor: "#111",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  disabledControl: {
    opacity: 0.45,
  },
  smallControlText: {
    color: "#fff",
    fontWeight: "700",
  },
  sectionTitle: {
    fontSize: 20,
    color: "#fff",
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "800",
  },
  subtitle: {
    color: "#bbb",
    fontSize: 14,
    marginBottom: 14,
  },
  input: {
    backgroundColor: "#111",
    color: "white",
    marginBottom: 12,
    borderRadius: 10,
    padding: 12,
  },
  ctaButton: {
    backgroundColor: "#00BFFF",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8,
  },
  ctaText: {
    color: "#fffefeff",
    fontWeight: "900",
    fontSize: 16,
  },
  link: {
    color: "#00BFFF",
    textAlign: "center",
    marginTop: 14,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: "space-between",
    gap: 12,
    marginTop: 6,
  },
  categoryCard: {
    width: "48%",
    height: 160,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#222",
  },
  categoryImage: {
    width: "100%",
    height: "100%",
  },
  categoryOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingVertical: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
  },
  categoryText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 16,
  },
  courseTile: {
    flexDirection: "row",
    backgroundColor: "#111",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 14,
    borderWidth: 2,
    borderColor: "transparent",
  },
  selectedCourseTile: {
    borderColor: "#00BFFF",
    backgroundColor: "#1a1a2e",
  },
  courseTileImage: {
    width: 120,
    height: 120,
  },
  courseTileText: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
  },
  courseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  courseTitle: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 18,
    flex: 1,
  },
  selectedBadge: {
    color: "#00BFFF",
    fontWeight: "700",
    fontSize: 12,
    marginLeft: 8,
  },
  courseMeta: {
    color: "#55c8ff",
    fontWeight: "700",
    marginTop: 4,
    fontSize: 13,
  },
  courseSnippet: {
    color: "#ccc",
    marginTop: 6,
    fontSize: 13,
  },
  detailImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginTop: 6,
    marginBottom: 12,
  },
  detailLabel: {
    color: "#00BFFF",
    fontWeight: "800",
    marginTop: 10,
  },
  detailText: {
    color: "#ccc",
    fontSize: 15,
    lineHeight: 22,
  },
  reminderNote: {
    color: "#bbb",
    fontSize: 12,
    textAlign: "center",
    marginTop: 15,
    fontStyle: "italic",
  },
  selectionSummary: {
    backgroundColor: "#1a1a2e",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: "#00BFFF",
  },
  selectionSummaryText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
    marginBottom: 8,
  },
  applyButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  applyButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
});
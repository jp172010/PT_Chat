import { StatusBar } from "expo-status-bar";
import { useMemo } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const FEATURE_PILLS = [
  "Personalized plans",
  "Conversational coaching",
  "Progress tracking",
  "Recovery guidance",
];

const NEXT_STEPS = [
  "Add onboarding screens for goals and equipment.",
  "Integrate the ChatGPT API for daily coaching.",
  "Create workout templates and session tracking.",
  "Design habit reminders and streaks.",
];

export default function App() {
  const now = useMemo(() => new Date(), []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.kicker}>PT Chat</Text>
          <Text style={styles.title}>Your AI-powered personal trainer.</Text>
          <Text style={styles.subtitle}>
            A mobile experience that plans workouts, tracks progress, and keeps you
            motivated through a chat-first coach.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What it will deliver</Text>
          <View style={styles.pillGrid}>
            {FEATURE_PILLS.map((pill) => (
              <View key={pill} style={styles.pill}>
                <Text style={styles.pillText}>{pill}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Next build steps</Text>
          {NEXT_STEPS.map((step, index) => (
            <View key={step} style={styles.stepRow}>
              <Text style={styles.stepIndex}>{index + 1}</Text>
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Session snapshot</Text>
          <View style={styles.card}>
            <Text style={styles.cardLabel}>Today</Text>
            <Text style={styles.cardValue}>{now.toDateString()}</Text>
            <Text style={styles.cardHint}>
              Check in to get a warm-up, main set, and cooldown tailored to you.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },
  content: {
    padding: 24,
    gap: 32,
  },
  header: {
    gap: 12,
  },
  kicker: {
    textTransform: "uppercase",
    color: "#38BDF8",
    letterSpacing: 2,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#F8FAFC",
  },
  subtitle: {
    fontSize: 16,
    color: "#CBD5F5",
    lineHeight: 22,
  },
  section: {
    gap: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#E2E8F0",
  },
  pillGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  pill: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: "#1E293B",
    borderWidth: 1,
    borderColor: "#334155",
  },
  pillText: {
    color: "#F1F5F9",
    fontWeight: "500",
  },
  stepRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  stepIndex: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#38BDF8",
    color: "#0F172A",
    textAlign: "center",
    fontWeight: "700",
    lineHeight: 28,
  },
  stepText: {
    flex: 1,
    color: "#E2E8F0",
    lineHeight: 22,
  },
  card: {
    backgroundColor: "#111827",
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: "#1F2937",
    gap: 6,
  },
  cardLabel: {
    color: "#94A3B8",
    textTransform: "uppercase",
    letterSpacing: 1,
    fontSize: 12,
    fontWeight: "600",
  },
  cardValue: {
    color: "#F8FAFC",
    fontSize: 20,
    fontWeight: "700",
  },
  cardHint: {
    color: "#CBD5F5",
    lineHeight: 20,
  },
});

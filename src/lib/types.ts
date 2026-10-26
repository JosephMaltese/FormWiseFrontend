import {ProgressChartProps, ScoreDataPoint} from "@/lib/interfaces";

type GroupedScoreData = Record<string, ScoreDataPoint[]>;

type GroupedProgressChartProps = Record<string, ProgressChartProps>

type SelectedVideo = {
    uri: string;
    fileName: string;
    mimeType: string;
    fileSize: number;
    duration: number | null;
}

type VideoAnalysis = {
    exercise: string;
    exercise_name: string;
    primary_metric: string;
    primary_metric_label: string;
    score: Score;
    reps: RepSummary;
    rep_details: Rep[];
    tempo: TempoSummary;
    metrics: MetricSummary[];
    cues: Cue[];
    strengths: string[];
    video: VideoSummary;
    camera_guidance: string;
}

type AnalysisCreated = {
    id: string;
    exercise: string;
    status: AnalysisStatus;
    status_url: string;
    annotated_video_url: string;
}

type AnalysisEnvelope = {
    id: string;
    exercise: string;
    status: AnalysisStatus;
    progress: number;
    stage: string;
    created_at: string;
    updated_at: string;
    expires_at: string;
    source_filename: string | null;
    annotated_video_url: string | null;
    report: VideoAnalysis | null;
    error: string | null;
}

type AnalysisStatus = "queued" | "running" | "completed" | "failed";

type Score = {
    criteria: Criterion[];
    grade: string;
    total: number;
}

type Criterion = {
    key: string;
    label: string;
    weight: number;
    earned: number;
    ratio: number;
    detail: string;
}

type RepSummary = {
    attempted: number;
    full_range: number;
    partial_range: number;
    clean: number;
    with_faults: number;
}

type Rep = {
    number: number;
    start_seconds: number;
    bottom_seconds: number;
    end_seconds: number;
    eccentric_seconds: number;
    concentric_seconds: number;
    range_of_motion_degrees: number;
    bottom_angle: number;
    top_angle: number;
    quality: string;
    faults: Fault[]
}

type Fault = {
    code: string;
    label: string;
    severity: string;
    cue: string;
    measured: number;
    threshold: number;
    unit: string;
    detail: string;
}

type TempoSummary = {
    average_eccentric_seconds: number | null;
    average_concentric_seconds: number | null;
    average_rep_seconds: number | null;
}

type VideoSummary = {
    duration_seconds: number;
    source_fps: number;
    width: number;
    height: number;
    frames_total: number;
    frames_analyzed: number;
    sample_fps: number;
    detection_rate: number;
    tracked_side: string | null;
}

type MetricSummary = {
    key: string;
    label: string;
    minimum: number | null;
    maximum: number | null;
    mean: number | null;
}

type Cue = {
    code: string;
    message: string;
    severity: string;
    affected_reps: number[];
}

type SummaryPageAnalysis = {
    llmAnalysis: string;
    exerciseType: string;
    videoUrl: string;
    id: number;
    score: number;
    uploadedAt: string;
    userId: string;
}

type MusclesTrained = {
    primary: string[];
    secondary: string[];
}

type LLMAnalysis = {
    overall: string;
    strength: string;
    improvement: string;
    action: string;
}

type Exercise = "Bicep Curl" | "Bench Press" | "Squat";
type APIExercise = "BICEP CURL" | "BENCH PRESS" | "SQUAT";

export {
    GroupedScoreData,
    GroupedProgressChartProps,
    SelectedVideo,
    VideoAnalysis,
    AnalysisCreated,
    AnalysisEnvelope,
    AnalysisStatus,
    SummaryPageAnalysis,
    Exercise,
    APIExercise,
    MusclesTrained,
    LLMAnalysis,
    Score,
    Criterion,
};

export const OBSERVED_ACTIVITY = {
  "project": "Atlas",
  "cadence": "Bi-weekly",
  "activity_stream": [
    {
      "week": 1,
      "message": "Quick update on Project Atlas. Backend work is mostly complete. Frontend tasks are ongoing. No major blockers."
    },
    {
      "week": 1,
      "message": "Atlas status. UI tasks nearing completion. Development progressing as expected."
    },
    {
      "week": 2,
      "message": "Status update. Testing has started. One minor payment issue identified."
    },
    {
      "week": 3,
      "message": "QA in progress. No new risks. Final integration under review."
    },
    {
      "week": 4,
      "message": "Release preparation ongoing. Final checks being completed."
    },
    {
      "week": 5,
      "message": "Release completed. Monitoring performance metrics."
    }
  ],
  "latest_activity_slice": {
    "frontend_tickets_completed": 3,
    "bugs_opened": 1,
    "bug_severity": "Medium",
    "failed_builds": 0,
    "deadline_changed": false
  }
};

export const INITIAL_LOGS = JSON.stringify(OBSERVED_ACTIVITY, null, 2);

export const ANALYSIS_STEPS = [
  "Signal ingestion",
  "Pattern alignment",
  "Narrative synthesis"
];
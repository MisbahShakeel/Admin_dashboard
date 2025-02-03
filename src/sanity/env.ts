export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-03'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  'skfSAV7xTIgCRZgbDjQ5FzyVb44chYUKZ0VLt4haUr74yh4mpLM3Mjt5n8aFfxfhqF1zRBnMOV06nfZN5166XVjiJiHZcEeqI8gWC8vxj2avLBt6sGs9MqqOgRzyN62BtOJEf98t2QKg9VFSzHvKkcPwcEb7abjA4XsRJQd7avB9YQ8GWqtH',
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
